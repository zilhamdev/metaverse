import { useMoralis } from "react-moralis"
import { useState } from "react";

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then((message) => {
            //the object was send successfully
        }, (error) => {
            //save error
            console.log(error.message)
        }
        )
        endOfMessagesRef.current.scrollIntoView({
            behavior: "smooth"
        });

        setMessage("");
    }
    return (
        <form className="flex fixed bottom-0 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl rounded-2xl shadow-xl border-4 border-blue-400 border-opacity-70 hover:border-opacity-100 focus-within:border-opacity-100 animate-pulse hover:animate-none focus-within:animate-none">
            <input className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                type="text"
                name="messages"
                placeholder={`Enter your message here ${user.getUsername()}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" onClick={sendMessage
            } className="font-bold text-pink-500 ">Send</button>
        </form>
    )
}





export default SendMessage