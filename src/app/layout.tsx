import { children } from "./types/types";
import "./globals.css";
import {Radio_Canada} from "next/font/google";

const Radio = Radio_Canada({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-radio_canada',
})

const Layout = ({children}:children) =>{
  return(
    <html>
      <body className={Radio.variable}>
        {children}
      </body>
    </html>
  )
}

export default Layout;