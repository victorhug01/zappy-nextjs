import {ThemeProvider as NextThemeProvider} from 'next-themes'
import { type ThemeProviderProps } from 'next-themes';

export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}