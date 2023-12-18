const url= 'http://localhost:8000'

export const loginApi = async () => {
    try {
      const response = await fetch(`${url}/auth/google`, {
        method: "GET",
        headers: { 'Content-type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Network Error');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in loginApi:', error);
      throw error; 
    }
  }


  export const FetchStepCounts = async (access_token:any, refresh_token:any) => {
    try {
      const response = await fetch(`${url}/auth/fetch-data`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ access_token, refresh_token })
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
  

  export const FetchAllData = async (access_token:string, refresh_token:string) => {
    try {
      const response = await fetch(`${url}/auth/fetch-all`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ access_token, refresh_token })
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

  export const FetchWalkathon = async (userid:string) => {
    try {
      const response = await fetch(`${url}/walkathon/select`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
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
        headers: { 'Content-type': 'application/json' },
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
      headers: { 'Content-type': 'application/json' },
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
      headers: { 'Content-type': 'application/json' },
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


export const GetWalkSteps7=async(access_token:string,refresh_token:string) => {

  try {
    const response = await fetch(`${url}/auth/fetch-data-days`, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ access_token,refresh_token,num:7 })
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


export const ScheduleWalkathonApi=async(form:any) => {

  try {
    const response = await fetch(`${url}/walkathon/insert`, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
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
      headers: { 'Content-type': 'application/json' },
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
      headers: { 'Content-type': 'application/json' },
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