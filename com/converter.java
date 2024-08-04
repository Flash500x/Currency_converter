package com;
import java.math.BigDecimal;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import java.util.*;
import java.util.Scanner;

public class converter
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter currency to convert from:");
        String convert_from = sc.nextLine();
        System.out.println("Enter currency to convert to:");
        String convert_to = sc.nextLine();
        System.out.println("Enter amount to convert:"); 
        BigDecimal amount = sc.nextBigDecimal();
        String url_string = "https://api.exchangerate.host/latest?base="+convert_from.toUpperCase();
        Http_client client = new Http_client();

    }
}

