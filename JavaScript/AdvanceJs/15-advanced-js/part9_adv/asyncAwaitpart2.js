// Callback = ek function jo dusre function ko argument ke form me diya jata hai, aur baad me call hota hai.
// promise take s call-back

function fetchPostData() {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });

}

function fetchCommentData() {

    return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched.");
    }, 3000);
  });

}

async function getBlogData() {

  try {
    console.log("Fetching blog data");
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();

    //promise.all take array ass input and restore in array also 
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);

    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching blog data", error);
  }

}
getBlogData();

