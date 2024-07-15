const closure = () => {
    const name ="test";
    const displayName = () => {
        console.log(name);
    };
    displayName();
};

closure();
