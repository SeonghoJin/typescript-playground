const failingResponse = ["Not Found", 404];

const passingResponse: [string, number] = ["{}", 200];

if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}

// Compile Error
// passingResponse[2]

type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
    [0, "1", "2"],
    [0, "1", "2"],
    [0, "1", "2"],
]

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[2], 300, 300, 300]
];

