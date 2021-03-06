/**
 * Internal dependencies
 */
import {
	IMAGE_EDITOR_CROP,
	IMAGE_EDITOR_ROTATE_COUNTERCLOCKWISE,
	IMAGE_EDITOR_FLIP,
	IMAGE_EDITOR_SET_ASPECT_RATIO,
	IMAGE_EDITOR_SET_CROP_BOUNDS,
	IMAGE_EDITOR_SET_FILE_INFO,
	IMAGE_EDITOR_STATE_RESET,
	IMAGE_EDITOR_STATE_RESET_ALL
} from 'state/action-types';

// Doesn't reset image file info (src, fileName, etc).
export function resetImageEditorState() {
	return {
		type: IMAGE_EDITOR_STATE_RESET
	};
}

// Resets image file info as well (src, fileName, etc).
export function resetAllImageEditorState() {
	return {
		type: IMAGE_EDITOR_STATE_RESET_ALL
	};
}

export function imageEditorRotateCounterclockwise() {
	return {
		type: IMAGE_EDITOR_ROTATE_COUNTERCLOCKWISE,
	};
}

export function imageEditorFlip() {
	return {
		type: IMAGE_EDITOR_FLIP
	};
}

export function setImageEditorAspectRatio( ratio ) {
	return {
		type: IMAGE_EDITOR_SET_ASPECT_RATIO,
		ratio
	};
}

export function setImageEditorFileInfo( src, fileName, mimeType, title ) {
	return {
		type: IMAGE_EDITOR_SET_FILE_INFO,
		src,
		fileName,
		mimeType,
		title
	};
}

export function setImageEditorCropBounds( topBound, leftBound, bottomBound, rightBound ) {
	return {
		type: IMAGE_EDITOR_SET_CROP_BOUNDS,
		topBound,
		leftBound,
		bottomBound,
		rightBound
	};
}

export function imageEditorCrop( topRatio, leftRatio, widthRatio, heightRatio ) {
	return {
		type: IMAGE_EDITOR_CROP,
		topRatio,
		leftRatio,
		widthRatio,
		heightRatio
	};
}
