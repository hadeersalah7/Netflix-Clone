import videoData from "../data/videos.json"

export const getVideos = async (searchQuery) => {

    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
// try{
 const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}
 `) 
    const data = await response.json()
    if(data?.error){
        console.error("error in displaying data", data.error)
        return []
    }
console.log(data)
return data?.items.map((item)=> {
    const id = item?.id.videoId || item.id
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id,
            
        }
    })   
// } catch(error){
// console.error("Something went wrong with video libarary", error)
// return []
// } 
}
    
