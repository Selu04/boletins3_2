'use client'
import ThemeContext , { ThemeProvider } from "./ThemeContext";
import Content from "./Content";
import { AuthProvider } from "./AuthContext";

export default function Home() {
  return (
    <div>
      <AuthProvider>
      <ThemeProvider> 
       <Content /> 
      </ThemeProvider>
      </AuthProvider>
    </div>  
  );
}
