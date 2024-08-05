package com;

import java.math.BigDecimal;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class converter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter currency to convert from:");
        String convert_from = sc.nextLine();
        System.out.println("Enter currency to convert to:");
        String convert_to = sc.nextLine();
        System.out.println("Enter amount to convert:");
        BigDecimal amount = sc.nextBigDecimal();

        String url_string = "https://api.exchangerate.host/latest?base=" + convert_from.toUpperCase();

        try {
            URL url = new URL(url_string);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder content = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    content.append(inputLine);
                }

                // Close the connections
                in.close();
                connection.disconnect();

                // Parse JSON response using Gson
                JsonObject json = JsonParser.parseString(content.toString()).getAsJsonObject();
                JsonObject rates = json.getAsJsonObject("rates");
                BigDecimal rate = rates.get(convert_to.toUpperCase()).getAsBigDecimal();

                // Calculate converted amount
                BigDecimal convertedAmount = amount.multiply(rate);
                System.out.println("Converted amount: " + convertedAmount);

            } else {
                System.err.println("Request failed: " + responseCode);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
