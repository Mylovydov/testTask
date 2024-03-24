const truncateText = (text: string, length = 30) => {
	return text.length > length ? `${text.slice(0, length)}...` : text;
};

export default truncateText;
