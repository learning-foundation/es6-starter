const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

export function testPromise() {
    myPromise().then(response => {
        console.log('My promise: ' + response);
    });
};

export async function testAsync() {
    const response = await myPromise();
    console.log('My async/await: ' + response);
};