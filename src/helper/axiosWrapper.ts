export const AuthWrapper = async (_func: any)=>{
    try{
        return {
            crash: false,
            data: (await _func())
        };
    }catch(e){
        // console.log(e)
        return {
            crash: true,
            message: e
        }
    }
}

export const responseWrapper = ({crash, data, message}: {
    crash: string|any;
    message: string|any;
    data: string|object|any;
})=>{
    if(crash){
        try{
            const _message = message.response.data.message;

            return {
                error: true,
                message: "An error occurred",
                crash: _message
            }
        }catch(e){
            return {
                error: true,
                message: "An error occurred",
                crash: "An error occurred"
            }
        }
        
    }
    else{
        return {
            error: false,
            data: data.data
        }
    }
}