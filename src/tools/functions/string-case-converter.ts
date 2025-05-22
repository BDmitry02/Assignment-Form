export function convertStringToUserFriendlyCase(text: string) {
    const builder: string[] = [];

    for (let i = 0; i < text.length; i++) {
        let character = text[i];

        if (i === 0) {
            character = character.toUpperCase();
        } else if (i > 0 && character === character.toUpperCase() && character !== character.toLowerCase()) {
            builder.push(" ");
        }

        builder.push(character);
    }
    return builder.join("");
}
