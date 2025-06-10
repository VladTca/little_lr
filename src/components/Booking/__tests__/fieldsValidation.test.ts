import { BookingFormSchema } from '../fieldsValidation';

describe('BookingFormSchema', () => {
  describe('firstName validation', () => {
    it('should validate a valid first name', async () => {
      const validData = { firstName: 'John' };
      await expect(BookingFormSchema.validateAt('firstName', validData)).resolves.toBe('John');
    });

    it('should reject a first name that is too short', async () => {
      const invalidData = { firstName: 'Jo' };
      await expect(BookingFormSchema.validateAt('firstName', invalidData)).rejects.toThrow();
    });

    it('should reject a first name that is too long', async () => {
      const invalidData = { firstName: 'JohnJacobJingleheimer' };
      await expect(BookingFormSchema.validateAt('firstName', invalidData)).rejects.toThrow();
    });

    it('should reject a first name with non-alphabetic characters', async () => {
      const invalidData = { firstName: 'John123' };
      await expect(BookingFormSchema.validateAt('firstName', invalidData)).rejects.toThrow();
    });
  });

  describe('lastName validation', () => {
    it('should validate a valid last name', async () => {
      const validData = { lastName: 'Doe' };
      await expect(BookingFormSchema.validateAt('lastName', validData)).resolves.toBe('Doe');
    });

    it('should reject a last name that is too short', async () => {
      const invalidData = { lastName: 'Do' };
      await expect(BookingFormSchema.validateAt('lastName', invalidData)).rejects.toThrow();
    });

    it('should reject a last name that is too long', async () => {
      const invalidData = { lastName: 'DoeJohnsonSmithWilliams' };
      await expect(BookingFormSchema.validateAt('lastName', invalidData)).rejects.toThrow();
    });

    it('should reject a last name with non-alphabetic characters', async () => {
      const invalidData = { lastName: 'Doe123' };
      await expect(BookingFormSchema.validateAt('lastName', invalidData)).rejects.toThrow();
    });
  });

  describe('email validation', () => {
    it('should validate a valid email', async () => {
      const validData = { email: 'john.doe@example.com' };
      await expect(BookingFormSchema.validateAt('email', validData)).resolves.toBe('john.doe@example.com');
    });

    it('should reject an invalid email format', async () => {
      const invalidData = { email: 'john.doe@' };
      await expect(BookingFormSchema.validateAt('email', invalidData)).rejects.toThrow();
    });

    it('should reject an empty email', async () => {
      const invalidData = { email: '' };
      await expect(BookingFormSchema.validateAt('email', invalidData)).rejects.toThrow();
    });
  });

  describe('phone validation', () => {
    it('should validate a valid phone number', async () => {
      const validData = { phone: '+1234567890' };
      await expect(BookingFormSchema.validateAt('phone', validData)).resolves.toBe('+1234567890');
    });

    it('should reject a phone number without a + prefix', async () => {
      const invalidData = { phone: '1234567890' };
      await expect(BookingFormSchema.validateAt('phone', invalidData)).rejects.toThrow();
    });

    it('should reject a phone number with incorrect length', async () => {
      const invalidData = { phone: '+123456789' };
      await expect(BookingFormSchema.validateAt('phone', invalidData)).rejects.toThrow();
    });

    it('should reject a phone number with non-numeric characters after +', async () => {
      const invalidData = { phone: '+123456789a' };
      await expect(BookingFormSchema.validateAt('phone', invalidData)).rejects.toThrow();
    });
  });

  describe('date validation', () => {
    it('should validate a valid date', async () => {
      const validData = { date: '2023-01-01' };
      await expect(BookingFormSchema.validateAt('date', validData)).resolves.toBe('2023-01-01');
    });

    it('should reject an empty date', async () => {
      const invalidData = { date: '' };
      await expect(BookingFormSchema.validateAt('date', invalidData)).rejects.toThrow();
    });
  });

  describe('time validation', () => {
    it('should validate a valid time', async () => {
      const validData = { time: '18:00' };
      await expect(BookingFormSchema.validateAt('time', validData)).resolves.toBe('18:00');
    });

    it('should reject an empty time', async () => {
      const invalidData = { time: '' };
      await expect(BookingFormSchema.validateAt('time', invalidData)).rejects.toThrow();
    });
  });

  describe('guests validation', () => {
    it('should validate a valid number of guests', async () => {
      const validData = { guests: '4' };
      await expect(BookingFormSchema.validateAt('guests', validData)).resolves.toBe('4');
    });

    it('should reject an empty guests field', async () => {
      const invalidData = { guests: '' };
      await expect(BookingFormSchema.validateAt('guests', invalidData)).rejects.toThrow();
    });
  });

  describe('occasion validation', () => {
    it('should validate a valid occasion', async () => {
      const validData = { occasion: 'Birthday' };
      await expect(BookingFormSchema.validateAt('occasion', validData)).resolves.toBe('Birthday');
    });

    it('should accept an empty occasion as it is optional', async () => {
      const validData = { occasion: '' };
      await expect(BookingFormSchema.validateAt('occasion', validData)).resolves.toBe('');
    });
  });

  describe('full form validation', () => {
    it('should validate a complete valid form', async () => {
      const validForm = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        date: '2023-01-01',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday'
      };

      await expect(BookingFormSchema.validate(validForm)).resolves.toEqual(validForm);
    });

    it('should reject a form with multiple invalid fields', async () => {
      const invalidForm = {
        firstName: 'J',
        lastName: 'D',
        email: 'invalid-email',
        phone: '1234567890',
        date: '',
        time: '',
        guests: '',
        occasion: 'Birthday'
      };

      await expect(BookingFormSchema.validate(invalidForm)).rejects.toThrow();
    });
  });
});