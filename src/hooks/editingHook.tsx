import { useState } from 'react';
/**
 * A custom React hook for managing a boolean value that represents whether an element is in editing mode.
 *
 * @param defaultValue The initial value for the editing state
 * @returns An object with `isEditing` and `toggleEditing` properties
 */
function useEditing(defaultValue: boolean) {
    const [isEditing, setIsEditing] = useState<boolean>(defaultValue);
    function toggleEditing(): void {
        setIsEditing((prevState) => !prevState);
    }

    return {
        isEditing,
        toggleEditing,
    };
}

export default useEditing;
