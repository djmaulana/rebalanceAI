import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const body = await req.json();
	console.log("Sending data to server is now running!")
    const translatedTextPromise = new Promise((resolve, reject) => {
		exec(
			`cd virenv/Scripts/ && activate && py ../../transfer.py "${body.data[0][0]}" ${body.data[1][0]}`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				resolve(stdout);
			}
		);
	});
    const translatedText = await translatedTextPromise;
    return NextResponse.json({translatedText});
}