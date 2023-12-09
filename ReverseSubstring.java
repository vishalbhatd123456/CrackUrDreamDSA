// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;

class HelloWorld {
    public static void main(String[] args) {
        String str = "abcdef";
        int left = 2;
        int right = 4;
        str = stringReverse(str, left, right);
        System.out.println(str);
    }
    public static String stringReverse(String str, int left, int right)
    {
        char[] charArray = str.toCharArray();
        
        while(left <= right)
        {
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            left++;
            right--;
        }
        return new String(charArray);
    }
}
