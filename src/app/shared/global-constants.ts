export class GlobalConstants{

    //Message
    public static genericError : string = "Something went wrong. Please try again later.";

    //unauthorized message
    public static unauthorized : string = "You are not an authorized person to access this page.";

    //Regex
    public static nameRegex : string = "[a-zA-Z0-9 ]*";

    public static emailRegex : string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex : string = "^[e0-9]{10,10}$";

    //Variable
    public static error : string = 'error';

    //API URL
    public static url : string = "http://localhost:8081";

}