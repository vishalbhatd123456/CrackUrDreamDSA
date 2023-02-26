
public class Solution
{
    public class LinkedList
    {
        public int value;
        public LinkedList next;
        public LinkedList(int value){
            this.value = value;
            this.next = null;
        }
    }
    public LinkedList RemoveDuplicatesFromLinkedList(Linkedlist head){
        LinkedList currentNode = head;
        while(currentNode!=null){
            LinkedList nextDistinctNode = currentNode.next;
            while(nextDistinctNode!=null && nextDistinctNode.value == currentNode.value){
                nextDistinctNode = nextDistinctNode.next;
            }
            currentNode.next = nextDistinctNode.next;
            currentNode = nextDistinctNode;
        }
        return head;
    }
}