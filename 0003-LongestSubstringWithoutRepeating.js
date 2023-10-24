

function areDistinct(str, i, j)
{
    var visited = new Array(256);

    for(var k = i ; k<=j;k++)
    {
        if(visited[str.charAt(k)] == true)
        {
            return false; // the characted is aldready been visited
        }
        visited[str.charAt(k)] = true;
    }
    return true;
}

function ComputeLongestcharacter(str)
{
    var n = str.length;
    var res = 0;

    for(var i = 0; i <n;i++)
    {
        for(var j = i;j<n;j++)
        {
            if(areDistinct(str,i,j))
            {
                res = Math.max(res,j-i+1);
            }
        }
    }
    return res;
}



//Driver code for JS

var str = "abcabcabc";
console.log("The input string is:", str);

var lengthOfString = str.length;
console.log("The length of the input string is", lengthOfString);

var lengthOfLongestNonRepeatingChar = ComputeLongestcharacter(str);

console.log("The length of the longest non repeated / unique string is", lengthOfLongestNonRepeatingChar);



