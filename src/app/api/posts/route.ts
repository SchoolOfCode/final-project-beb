import { getPostsByInterest, addNewPostToHub } from '../../utils/supabase/posts';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     return NextResponse.json({ message: "API is working" });
// }
//Wasn't working because no API between the Client and Server side
//API route to fetch posts by interests
interface PostRequest {
    user_id: string;
    interest_id: number;  // Changed to number since that's what your component sends
    post_title: string;
    post_text: string;
}

// Interface for the response
interface PostResponse {
    post_id: string;
    interest_id: number;
    post_title: string;
    post_text: string;
    comments: string[];
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const interest_id = searchParams.get("interest_id");

    if (!interest_id) {
        return NextResponse.json({ error: "Invalid interest_id" }, { status: 400 });
    }

    try {
        const posts = await getPostsByInterest(interest_id);
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch posts: ${error}` }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body: PostRequest = await request.json();

        console.log('Received request body:', body);

        const newPost = await addNewPostToHub({
            user_id: body.user_id,
            interest_id: body.interest_id,
            post_title: body.post_title,
            post_text: body.post_text
        });

        if (!newPost) {
            return NextResponse.json(
                { error: 'Failed to create post' },
                { status: 500 }
            );
        }

        const formattedPost: PostResponse = {
            post_id: newPost.post_id,
            interest_id: body.interest_id,
            post_title: newPost.post_title,
            post_text: newPost.post_text,
            comments: []
        };

        return NextResponse.json(
            {
                message: 'Post created successfully',
                post: formattedPost
            },
            { status: 201 }
        );

    } catch (err) {
        const error = err as Error;  // Type assertion to Error
        console.error('Detailed server error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                details: error.message || 'Unknown error'
            },
            { status: 500 }
        );
    }
}