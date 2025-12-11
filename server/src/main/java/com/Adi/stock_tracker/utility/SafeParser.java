package com.Adi.stock_tracker.utility;

public final class SafeParser {

    private SafeParser() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated.");
    }

    public static Double safeParseDouble(String value)
    {
        if (value == null || value.isBlank() || "None".equalsIgnoreCase(value)) {
            return null;
        }
        try {
            return Double.parseDouble(value);
        }
        catch (NumberFormatException e)
        {
            System.err.println("Failed to parse value to a Long: "+value);
            return null;
        }
    }
}
