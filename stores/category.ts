export const useCategoryStore = defineStore("category", {
    state: () => ({
    categories: {} as any,
    status: false,
    message: "",
    }),
    actions: {
    async getAllCategory(){
    const { baseUrl, apikey } = useAppConfig();
    const {data, error} = await useFetch("/rest/v1/categories", {
    baseURL: baseUrl,
    method: "GET",
    headers: {
    apikey: apikey,
    },
    })
   
    if(error.value){
    this.status = false;
    this.message = " Failed !!!";
    }else if(data){
    this.status = true;
    this.message = " successfully";
    this.categories = data.value;
    }
    },
    }
   })