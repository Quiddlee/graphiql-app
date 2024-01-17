export default function switchPassType(prevType: string) {
	return prevType === 'password' ? 'text' : 'password';
}
