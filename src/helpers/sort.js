export const sortUserStoryByDate = (userStory) => {
    return  userStory.sort(function(a, b) {
        const keyA = new Date(+a.time),
            keyB = new Date(+b.time);
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    });
}