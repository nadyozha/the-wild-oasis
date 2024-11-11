import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://fsksbrhtutpdalesuvye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3Nicmh0dXRwZGFsZXN1dnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2ODYwNDcsImV4cCI6MjA0NTI2MjA0N30.4ojJyWqijcqUPAz5oeYCEWwSQaO5xSXXcf_9jI8kI0M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;