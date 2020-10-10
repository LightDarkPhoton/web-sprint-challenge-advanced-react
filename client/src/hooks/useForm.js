// write your custom hook here to control your checkout form


// Might need to change this to {useLocalStorage} depending on how we originally exported. Have to test and see.
import useLocalStorage from './useLocalStorage'

const useForm = (initialValue) => {
    const [value, setValues] = useLocalStorage('Any key works here', initialValue)

    return [value, setValues]

}

export default useForm;
