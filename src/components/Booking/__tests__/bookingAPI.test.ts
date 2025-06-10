import { fetchAPI, submitAPI } from '../bookingAPI';

describe('bookingAPI', () => {
  describe('fetchAPI', () => {
    it('should return an array of time slots', () => {
      const date = new Date('2023-01-01');
      const result = fetchAPI(date);
      
      // Check that the result is an array
      expect(Array.isArray(result)).toBe(true);
      
      // Check that all items in the array are valid time strings
      result.forEach(timeSlot => {
        expect(typeof timeSlot).toBe('string');
        expect(timeSlot).toMatch(/^(1[7-9]|2[0-3]):(00|30)$/);
      });
    });
    
    it('should return different results for different dates', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-02');
      
      const result1 = fetchAPI(date1);
      const result2 = fetchAPI(date2);
      
      // The results should be different for different dates due to the seeded random
      expect(result1).not.toEqual(result2);
    });
    
    it('should return the same results for the same date', () => {
      const date = new Date('2023-01-01');
      
      const result1 = fetchAPI(date);
      const result2 = fetchAPI(date);
      
      // The results should be the same for the same date due to the seeded random
      expect(result1).toEqual(result2);
    });
  });
  
  describe('submitAPI', () => {
    it('should return true when submitting valid form data', () => {
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
      
      // Mock console.log to prevent output during tests
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      const result = submitAPI(formData);
      
      // The function should return true
      expect(result).toBe(true);
      
      // The function should log the form data
      expect(consoleSpy).toHaveBeenCalledWith(formData);
      
      // Restore the original console.log
      consoleSpy.mockRestore();
    });
  });
});