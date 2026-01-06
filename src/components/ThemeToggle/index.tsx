import React, {useState, useEffect} from 'react'
import './styles.scss'
import MoonIcon from './assets/svg/moon'
import SunIcon from './assets/svg/sun'

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

const updateTheme = (isDarkEnabled: boolean) => {
  // Get CSS variables for background/foreground
  // eslint-disable-next-line no-undef
  // const styles = window.getComputedStyle(document.body)
  // const black = styles.getPropertyValue('--black')
  // const white = styles.getPropertyValue('--white')
  // // eslint-disable-next-line no-undef
  // const docEl = document.documentElement

  const htmlElement = document.querySelector('html')
  if (isDarkEnabled) {
    // docEl.style.setProperty('--background', black)
    // docEl.style.setProperty('--foreground', white)
    // eslint-disable-next-line no-undef
    htmlElement?.classList.add('dark')
    htmlElement?.classList.remove('light')
  } else {
    // docEl.style.setProperty('--background', white)
    // docEl.style.setProperty('--foreground', black)
    // eslint-disable-next-line no-undef
    htmlElement?.classList.remove('dark')
    htmlElement?.classList.add('light')
  }
}

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(isDark)

  /*
   * Read the blog post here:
   * https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle
   */

  useEffect(() => {
    updateTheme(isEnabled)
  }, [isEnabled])

  const toggleState = () => {
    setIsEnabled(prevState => !prevState)
  }

  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
        <span className="hidden">{isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}</span>
        <div className="icons">
          <MoonIcon />
          <SunIcon />
        </div>
        <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onChange={toggleState} />
      </div>
    </label>
  )
}
