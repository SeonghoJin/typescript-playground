(() => {
    function exit(): never {
        throw new Error();
    }

    function log_then_exit(): never {
        console.log();
        exit();
    }

    function log_then_exit_comma(): never {
        console.log(), exit();
    }
})();