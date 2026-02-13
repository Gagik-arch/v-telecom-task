import { memo } from 'react';
import type { ImageProps } from './types';

function Image({ src, alt, ...props }: ImageProps) {
	return <img alt={alt} src={src} {...props} />;
}

Image.displayName = 'Image';

export default memo(Image);
