const url = 'https://a5d3-103-191-91-174.ngrok-free.app'

const url1 = 'http://localhost:8000'

export const loginApi = async (email:string,password:string) => {
  try {
    const response = await fetch(`${url}/mobile/login`, {
      method: "POST",
      headers: {
         'Content-type': 'application/json',
         'ngrok-skip-browser-warning': 'true',

        },
        body:JSON.stringify({email,password})
    });

  

    const data = await response.json();
    console.log(data,"Idu enga data va iruku");
    return data;
  } catch (error) {
    console.error('Error in loginApi:', error);
    throw error; 
  }
}

export const GetWalkSteps = async (email:string) => {
  try {
    const response = await fetch(`${url}/mobile/view`, {
      method: "POST",
      headers: {
         'Content-type': 'application/json',
         'ngrok-skip-browser-warning': 'true',

        },
        body:JSON.stringify({email})
    });

  

    const data = await response.json();
    console.log(data,"Idu enga data va iruku");
    return data;
  } catch (error) {
    console.error('Error in loginApi:', error);
    throw error; 
  }
}



  export const FetchWalkathon = async (userid:string) => {
    try {
      const response = await fetch(`${url}/walkathon/select`, {
        method: "POST",
        headers: { 
          'Content-type': 'application/json',
          'ngrok-skip-browser-warning': 'true',

         },
        body: JSON.stringify({ userid })
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json(); 
      console.log(data, "Response"); 
  
      return data;
    } catch (error) {
      console.error('Error in FetchStepCounts:', error);
      throw error;
    }
  }

export const AddEnrollments = async(userid:string,gameid:string) => {
    try {
      const response = await fetch(`${url}/enrollment/add-enrollment`, {
        method: "POST",
        headers: { 
          'Content-type': 'application/json',
          'ngrok-skip-browser-warning': 'true',

         },
        body: JSON.stringify({ userid,gameid })
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
  
    } catch (error) {
      console.error('Error in FetchStepCounts:', error);
      throw error;
    }
  
}


export const AlreadyEnrollments = async(userid:string,gameid:string) => {
  try {
    const response = await fetch(`${url}/enrollment/already-enrollment`, {
      method: "POST",
      headers: { 
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',

       },
      body: JSON.stringify({ userid,gameid })
    });

    if (!response.ok) {
      throw new Error('Network Error');
    }

    const data = await response.json(); 
    return data;



  } catch (error) {
    console.error('Error in FetchStepCounts:', error);
    throw error;
  }

}

export const PostUserDetail=async(user_id: string,user_name: string,age: number, gender: string, img_url: string, name: string,step_count:any) => {

  try {
    const response = await fetch(`${url}/users/insert`, {
      method: "POST",
      headers: {
         'Content-type': 'application/json',
         'ngrok-skip-browser-warning': 'true',

         },
      body: JSON.stringify({ user_id,user_name,age, gender, img_url, name,step_count })
    });


    if (!response.ok) {
      throw new Error('Network Error');
    }
return response;
  }
    catch(err) {

      console.log(err);
    }
}




export const ScheduleWalkathonApi=async(form:any) => {

  try {
    const response = await fetch(`${url}/walkathon/insert`, {
      method: "POST",
      headers: {
         'Content-type': 'application/json' ,
         'ngrok-skip-browser-warning': 'true',

        },
      body: JSON.stringify(form)
    });


    if (!response.ok) {
      throw new Error('Network Error');
    }
    const data = await response.json(); 
    return data;

  }
    catch(err) {

      console.log(err);
    }
}


export const GetWalkathonResults=async(name:string) => {

  try {
    const response = await fetch(`${url}/walkathon/select-admin`, {
      method: "POST",
      headers: { 
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',

       },
      body: JSON.stringify({name})
    });


    if (!response.ok) {
      throw new Error('Network Error');
    }
    console.log(response,"What the hell is happening?");
    const data = await response.json(); 
    console.log(data,"ena pa inga")
    return data;

  }
    catch(err) {

      console.log(err);
    }
}


export const GetWalkathonAdmin=async() => {

  try {
    const response = await fetch(`${url}/walkathon/view-walkathon`, {
      method: "POST",
      headers: { 
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',

       },
    });


    if (!response.ok) {
      throw new Error('Network Error');
    }
    const data = await response.json(); 
    return data;

  }
    catch(err) {

      console.log(err);
    }
}



export const SuperMassPosition=async(email:string) => {

  try {
    const response = await fetch(`${url}/users/supermass`, {
      method: "POST",
      headers: { 
        'Content-type': 'application/json',
        'ngrok-skip-browser-warning': 'true',

       },
       body: JSON.stringify({email})
    });


    if (!response.ok) {
      throw new Error('Network Error');
    }
    const data = await response.json(); 
    console.log(data,"position")
    return data;

  }
    catch(err) {

      console.log(err);
    }
}