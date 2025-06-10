import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../BookingForm';


describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];

  const defaultProps = {
    dispatch: mockDispatch,
    availableTimes: mockAvailableTimes,
    submitForm: mockSubmitForm
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with all fields', () => {
    render(<BookingForm {...defaultProps} />);

    // Check for heading
    expect(screen.getByText('RESERVATION ONLINE')).toBeInTheDocument();

    // Check for form fields
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();

    // Check for date and time fields
    expect(screen.getByText('Choose date and time:')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Select reservation time' })).toBeInTheDocument(); // time select

    // Check for guests field
    expect(screen.getByRole('combobox', { name: 'Select number of guests' })).toBeInTheDocument(); // guests select

    // Check for occasion field
    expect(screen.getByText('Select an occasion (optional)')).toBeInTheDocument();

    // Check for submit button
    expect(screen.getByRole('button', { name: 'Submit booking details' })).toBeInTheDocument();
  });

  it('displays available times in the dropdown', () => {
    render(<BookingForm {...defaultProps} />);

    const timeSelect = screen.getByRole('combobox', { name: 'Select reservation time' });
    fireEvent.click(timeSelect);

    mockAvailableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  it('dispatches date action when date is changed', async () => {
    render(<BookingForm {...defaultProps} />);

    // Find date input by its id instead of role
    const dateInput = document.getElementById('date');
    if (dateInput) {
      fireEvent.change(dateInput, { target: { value: '2023-01-01' } });
    }

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'date',
        payload: expect.any(Date)
      });
    });
  });

  it('shows validation errors for required fields when submitting empty form', async () => {
    render(<BookingForm {...defaultProps} />);

    const submitButton = screen.getByRole('button', { name: 'Submit booking details' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    });

    // Form should not be submitted
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  it('calls submitForm with form data when valid form is submitted', async () => {
    const user = userEvent.setup();
    render(<BookingForm {...defaultProps} />);

    // Fill in form fields
    await user.type(screen.getByLabelText(/First Name/i), 'John');
    await user.type(screen.getByLabelText(/Last Name/i), 'Doe');
    await user.type(screen.getByLabelText(/Email/i), 'john.doe@example.com');
    await user.type(screen.getByLabelText(/Phone Number/i), '+1234567890');

    // Select time
    const timeSelect = screen.getByRole('combobox', { name: 'Select reservation time' });
    await user.selectOptions(timeSelect, '18:00');

    // Select guests
    const guestsSelect = screen.getByRole('combobox', { name: 'Select number of guests' });
    await user.selectOptions(guestsSelect, '4');

    // Select occasion
    const occasionSelect = screen.getByRole('combobox', { name: 'Select occasion for booking' });
    await user.selectOptions(occasionSelect, 'Birthday');

    // Submit form
    const submitButton = screen.getByRole('button', { name: 'Submit booking details' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith(
        expect.any(Object),
        {
          formData: expect.objectContaining({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            time: '18:00',
            guests: '4',
            occasion: 'Birthday',
            reserveNumber: expect.any(Number)
          })
        }
      );
    });
  });

  it('shows success message after successful form submission', async () => {
    const user = userEvent.setup();
    render(<BookingForm {...defaultProps} />);

    // Fill in form fields with valid data
    await user.type(screen.getByLabelText(/First Name/i), 'John');
    await user.type(screen.getByLabelText(/Last Name/i), 'Doe');
    await user.type(screen.getByLabelText(/Email/i), 'john.doe@example.com');
    await user.type(screen.getByLabelText(/Phone Number/i), '+1234567890');

    // Select time
    const timeSelect = screen.getByRole('combobox', { name: 'Select reservation time' });
    await user.selectOptions(timeSelect, '18:00');

    // Submit form
    const submitButton = screen.getByRole('button', { name: 'Submit booking details' });
    await user.click(submitButton);

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/Your booking request has been accepted/i)).toBeInTheDocument();
    });
  });

  it('validates form fields according to validation rules', async () => {
    const user = userEvent.setup();
    render(<BookingForm {...defaultProps} />);

    // Test invalid first name (too short)
    await user.type(screen.getByLabelText(/First Name/i), 'Jo');
    fireEvent.blur(screen.getByLabelText(/First Name/i));

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid name/i)).toBeInTheDocument();
    });

    // Test invalid email
    await user.type(screen.getByLabelText(/Email/i), 'invalid-email');
    fireEvent.blur(screen.getByLabelText(/Email/i));

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });

    // Test invalid phone number
    await user.type(screen.getByLabelText(/Phone Number/i), '1234567890');
    fireEvent.blur(screen.getByLabelText(/Phone Number/i));

    await waitFor(() => {
      expect(screen.getByText(/Phone number must start with \+/i)).toBeInTheDocument();
    });
  });
});
