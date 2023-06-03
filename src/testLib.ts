export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (result === expected) {
                console.log("✅ Test Passed");
            } else {
                throw new Error(`❌ ${result} is not equal to ${expected}`);
            }
        }
    };
}

export async function test(description: string, callback: ()=> void){
    try{
        await callback();
        console.log(`✅ ${description}`);
    }catch{
        console.log(`❌ ${description}`)
    }
}

export const it = test;

export function describe(description: string, callback: ()=> void){
    console.log(description);
    callback();
}