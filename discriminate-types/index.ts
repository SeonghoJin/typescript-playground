type TimingEvent = { name: "start"; userStarted: boolean }
    | { name: "closed"; duration: number };

const handleEvent = (event: TimingEvent) => {
    switch (event.name) {
        case "start":
            const initiatedByUser = event.userStarted
            break;
        case "closed":
            const timespan = event.duration;
            break;
    }
}

type APIResponses = { version: 0; msg: string } | { version: 1; message: string; status: number } | { error: string };

const handleResponse = (response: APIResponses) => {
    if ("error" in response) {
        console.error(response.error);
        return;
    }

    if (response.version === 0) {
        console.log(response.msg);
    } else if (response.version === 1) {
        console.log(response.status, response.message);

    }
};
