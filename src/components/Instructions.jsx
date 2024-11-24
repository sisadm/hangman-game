
import axios from "axios"



const Instructions =  ( props ) => {


    const { word, setWord } = props;

    const fetchWords = async () => {
        try {
            
            const response = await axios.get(`https://random-word-api.vercel.app/api?words=10&length=5`);
    
            setWord(response.data)
                    
          } catch (err) {
            console.log("Could not retrieve information. Please check the status code: ", err); 
          }
    }

    const hangleClick = () => {
        fetchWords()
    }

    return (

        <>
            <h1>Welcome to Hangman.</h1>

            <p>The classic word-guessing game where your wits and vocabulary will be put to the test! Get ready to uncover the hidden word, one letter at a time—but be careful, each wrong guess brings you closer to hanging your stick-figure friend. Will you save them with your sharp mind, or will they meet their unfortunate fate? Grab your thinking cap and let the guessing begin. Good luck—youll need it!</p>

            <button type="button" onClick={hangleClick}> Start new Game </button>
        </>


    )
}

export default Instructions