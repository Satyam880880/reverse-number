package com.studyopedia;

import java.util.*;

public class Demo {
	public static void update(int marks[], int nonChangable) {
	for(int i =0; i<marks.length;i++) {
	marks[i]= marks[i] +1;
	
	}
	}
	
	
	public static void main(String[] arg) {
int marks[] = {97, 98,99};
int nonChangable = 5;
update(marks, nonChangable);
System.out.println(nonChangable);

	//print our marks
	for(int i=0; i<marks.length; i++) {
		System.out.println(marks[i]+" ");

}
	System.out.println();
	
}	
}