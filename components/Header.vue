<template> 
    <header class="w-full border-b border-slate-200 py-6 bg-green">
        <div class="container">     
            <div class="flex justify-between items-center">
                <div >
                    <NuxtLink to="/" class="text-xl font-bold">FauJinan  [SMK CODING]</NuxtLink>                   
                </div>   
                <nav class="flex items-center gap-6 font-bold">
            <NuxtLink to="/" class="text-base tc-red">HOME</NuxtLink>
            <NuxtLink to="/product" class="text-base">PRODUCT</NuxtLink>
            <NuxtLink to="/cart" class="text-base">CART</NuxtLink>
                </nav>    
            </div>
            </div>
        </header>
   
        
</template>
    <style >
    body{
        background-color: black;
        color: rgb(0, 255, 4);
        border: 2px solid green;
  }
</style>