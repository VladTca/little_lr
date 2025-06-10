import { renderHook, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import useSubmitForm from '../useSubmitForm';
import { submitAPI } from '../bookingAPI';

// Mock the submitAPI function
jest.mock('../bookingAPI', () => ({
  submitAPI: jest.fn()
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('useSubmitForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
  );

  it('should return submitForm function', () => {
    const { result } = renderHook(() => useSubmitForm(), { wrapper });
    expect(result.current.submitForm).toBeDefined();
    expect(typeof result.current.submitForm).toBe('function');
  });

  it('should call submitAPI with form data when submitForm is called', () => {
    // Mock submitAPI to return true
    (submitAPI as jest.Mock).mockReturnValue(true);

    const { result } = renderHook(() => useSubmitForm(), { wrapper });

    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      date: '2023-01-01',
      time: '18:00',
      occasion: 'Birthday',
      guests: '4',
      reserveNumber: 123
    };

    const event = {
      preventDefault: jest.fn()
    } as unknown as React.FormEvent;

    act(() => {
      result.current.submitForm(event, { formData });
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(submitAPI).toHaveBeenCalledWith(formData);
  });

  it('should store reservation data in localStorage when form is submitted successfully', () => {
    // Mock submitAPI to return true
    (submitAPI as jest.Mock).mockReturnValue(true);

    const { result } = renderHook(() => useSubmitForm(), { wrapper });

    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      date: '2023-01-01',
      time: '18:00',
      occasion: 'Birthday',
      guests: '4',
      reserveNumber: 123
    };

    const event = {
      preventDefault: jest.fn()
    } as unknown as React.FormEvent;

    act(() => {
      result.current.submitForm(event, { formData });
    });

    // Check that localStorage was updated
    const storedData = JSON.parse(localStorageMock.getItem('Little_Lemon-Table') || '{}');
    expect(storedData).toEqual({
      date: '2023-01-01',
      time: '18:00',
      reservation: 123
    });
  });

  it('should navigate to confirmation page after a delay when form is submitted successfully', () => {
    // Mock submitAPI to return true
    (submitAPI as jest.Mock).mockReturnValue(true);

    const { result } = renderHook(() => useSubmitForm(), { wrapper });

    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      date: '2023-01-01',
      time: '18:00',
      occasion: 'Birthday',
      guests: '4',
      reserveNumber: 123
    };

    const event = {
      preventDefault: jest.fn()
    } as unknown as React.FormEvent;

    act(() => {
      result.current.submitForm(event, { formData });
    });

    // Before the timeout, navigate should not have been called
    expect(mockNavigate).not.toHaveBeenCalled();

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    // After the timeout, navigate should have been called
    expect(mockNavigate).toHaveBeenCalledWith('/confirmation', {
      state: formData
    });
  });

  it('should not update state or navigate if submitAPI returns false', () => {
    // Mock submitAPI to return false
    (submitAPI as jest.Mock).mockReturnValue(false);

    const { result } = renderHook(() => useSubmitForm(), { wrapper });

    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      date: '2023-01-01',
      time: '18:00',
      occasion: 'Birthday',
      guests: '4',
      reserveNumber: 123
    };

    const event = {
      preventDefault: jest.fn()
    } as unknown as React.FormEvent;

    act(() => {
      result.current.submitForm(event, { formData });
    });

    // Check that localStorage was not updated
    expect(localStorageMock.getItem('Little_Lemon-Table')).toBeNull();

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    // Navigate should not have been called
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});