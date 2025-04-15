import {randomUUID} from 'node:crypto'

export class database_memory {
    #videos = new Map()


    create(videos){
        const videosId = randomUUID()
        
        this.#videos.set(videosId, videos)
    }

    update(id, videos){
        this.videos.set(id, videos)
    }

    delete(id){
        this.videos.delete(id)
    }

    list(){
        this.#videos.values
    }
}