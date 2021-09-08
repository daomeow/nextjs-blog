import { useState, useEffect } from 'react';

export const useDarkMode = () => {
	const [isDark, setIsDark] = useState(false);

  useEffect(() => {
		isDark
			? window.document.body.classList.add('dark')
			: window.document.body.classList.remove('dark')

		try {
			window.setItem('isDarkMode', isDark)
		} catch (error) {
			console.error('unable to change setting')
		}
	}, [isDark]);

	return [isDark, setIsDark];
}