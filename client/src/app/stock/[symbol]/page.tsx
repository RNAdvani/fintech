"use client"
import BigStockChart from '@/components/charts/big-chart';
import { Button } from '@/components/ui/button';
import { useDialog } from '@/hooks/useDialog';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DialogHandle } from '@/types';
import CustomDialog from '@/components/CustomDialog';
import Analyze from '@/components/Analyze';
import axios from 'axios';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '@/apiUrl';
import { useAuth } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';



interface Props {
  params: { symbol: string };
}

const SingleStockPage: React.FC<Props> =  ({params}) => {

  const {toast} = useToast();

  const {userId} = useAuth();

  const stock = params.symbol;

  const dialogRef = useRef<DialogHandle>(null);
 const [isInWatchList,setIsInWatchList] = useState(false);

 const [handleOpenDialog,handleCloseDialog] = useDialog(dialogRef);

 
 
 const handleAddToWatchList = useCallback(async()=>{
     try {
       const res = await axios.post(ADD_TO_WATCHLIST,{stock,clerkId:userId});
       toast({
          title: 'Success',
          description: `Added ${stock} to watchlist`,
        });
       setIsInWatchList(true);
     } catch (error) {
       console.log(error);
     }
 },[])

 const handleRemoveFromWatchList = useCallback(async()=>{
   try {
     const res = await axios.post(REMOVE_FROM_WATCHLIST,{stock,clerkId:userId});
      toast({
            title: 'Success',
            description: `Removed ${stock} from watchlist`,
          });
     setIsInWatchList(false);
   } catch (error) {
     console.log(error);
   }
 }
 ,[])
 const getWatchList = useCallback(async()=>{
   try {
    const res =await axios.get(`http://localhost:4000/api/v1/watchlist/getWatchList?clerkId=${userId}`);
    console.log(res.data);
   } catch (error) {
     console.log(error);
   }
 },[handleAddToWatchList,handleRemoveFromWatchList])

 useEffect(()=>{
   getWatchList();
 },[handleAddToWatchList,handleRemoveFromWatchList])
    
  return (
    <div className='w-full flex flex-col justify-center items-center p-6'>
      <div className='flex justify-between w-full'>
        <Button onClick={handleOpenDialog} className='bg-darkgreen mr-2'>Analyze</Button>
        {isInWatchList ? <Button onClick={handleRemoveFromWatchList} className='bg-darkred'>Remove from watchlist</Button> : <Button onClick={handleAddToWatchList} className='bg-darkgreen'>Add to watchlist</Button>}
      </div>
        <div className='flex w-full gap-2 overflow-hidden p-6 items-center'>
           <BigStockChart symbol={params.symbol} className='h-[25rem]' />
        </div>
   
          <CustomDialog ref={dialogRef} preventDefault>
            <Analyze handleClose={handleCloseDialog} symbol={params.symbol} />
          </CustomDialog>
    </div>
  )
}

export default SingleStockPage