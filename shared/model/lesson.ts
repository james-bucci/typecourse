
export interface Lesson {
    readonly id: number,
    readonly url: string,
    description: string,
    duration: string,
    seqNo: number,
    courseId: number,
    pro: boolean,
    tags?: string
}

export function createLessonFromDbModel( 
    {
        id, 
        url, 
        description, 
        duration, 
        seqNo, 
        courseId, 
        pro, 
        tags
    }: any) : Lesson {

    return {
        id, 
        url, 
        description, 
        duration, 
        seqNo, 
        courseId, 
        pro, 
        tags
    };
}
