import { useState } from 'react';

export function useEditing(defaultValue: boolean) {
    const [isEditing, setIsEditing] = useState(defaultValue);
    function toggleEditing() {
        setIsEditing(!isEditing);
    }

    return {
        isEditing,
        toggleEditing,
    };
}
