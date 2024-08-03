import java.util.*;
import java.util.HashMap;
import java.net.URL;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.util.Scanner;
public class converter
{
    private static double sendHttpGETRequest(String fromCode, String toCode, double amount) 
    {
        String GET_URL = "https://api.exchangerate-api.com/v4/latest/" + fromCode + "&symbols=" +fromCode;
        URL url = new URL(GET_URL);
        HttpURLConnection httpURLConnection = url.openConnection();

        try {
            URL url = new URL(urlString);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();

            int responseCode = connection.getResponseCode();
            if (responseCode == 200) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                reader.close();

                // Parse the JSON response and extract the exchange rate
                // Assuming the response format is {"base":"USD","date":"2022-01-01","rates":{"EUR":0.85}}
                String jsonResponse = response.toString();
                double exchangeRate = parseExchangeRateFromJson(jsonResponse, toCode);

                // Performing the currency conversion
                double convertedAmount = amount * exchangeRate;
                return convertedAmount;
            } else {
                System.out.println("Error: Failed to retrieve exchange rate. Response code: " + responseCode);
                return 0.0;
            }
        } catch (MalformedURLException e) {
            System.out.println("Error: Invalid URL.");
            e.printStackTrace();
            return 0.0;
        } catch (IOException e) {
            System.out.println("Error: Failed to make HTTP request.");
            e.printStackTrace();
            return 0.0;
        }
    }
    private static double parseExchangeRateFromJson(String jsonResponse, String toCode) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'parseExchangeRateFromJson'");
    }
    public static void main(String[] args)
    {

        HashMap<Integer, String> currencyCodes = new HashMap<Integer,String>();
        // adding currency codes and their names
        currencyCodes.put(1, "USD");
        currencyCodes.put(2, "EUR");
        currencyCodes.put(3, "GBP");
        currencyCodes.put(4, "JPY");
        currencyCodes.put(5, "CAD");
        currencyCodes.put(6, "AUD");
        currencyCodes.put(6,"CHF");
        currencyCodes.put(7,"CNY");
        currencyCodes.put(8,"HKD");
        currencyCodes.put(9,"SGD");
        currencyCodes.put(10,"INR");
        currencyCodes.put(11,"KRW");
        currencyCodes.put(12,"MXN");
        currencyCodes.put(13,"NOK");
        currencyCodes.put(14,"PLN");
        currencyCodes.put(15,"RUB");
        currencyCodes.put(16,"SEK");
        currencyCodes.put(17,"TRY");
        currencyCodes.put(18,"ZAR");
        currencyCodes.put(19,"BRL");
        currencyCodes.put(20,"CLP");
        currencyCodes.put(21,"COP");
        currencyCodes.put(22,"DKK");
        currencyCodes.put(23,"MYR");
        currencyCodes.put(24,"HKD");
        currencyCodes.put(25,"ILS");
       

        String fromCode, toCode;
        double amount;

        Scanner sc = new Scanner(System.in);
        System.out.println("Welcome tur Currency Converter!");
        System.out.println("Enter the currency code to convert from:");
        System.out.println("1. USD(United States Dollar) \t 2. EUR(Euro) \t 3. GBP(Pound Sterling) \t 4. JPY(Japanese Yen) \t 5. CAD(Canadian Dollar) \t 6. AUD(Australian Dollar) \t 7. CHF(Swis Franc) \t 8. CNY(Chinese Yuan) \t 9. SGD(Singapore Dollars) \t 10. INR(Indian Rupee) \t 11. KRW(South Korean Won) \t 12. MXN(Mexican Peso) \t 13. NOK(Norwegian Krone) \t 14. PLN(Polish złoty) \t 15. RUB(Russian Ruble) \t 16. SEK(Swedish Krona) \t 17. TRY(Turkish lira) \t 18. ZAR( South African Rand) \t 19. BRL(Brazilian Real) \t 20. CLP(Chilean Peso) \t 21. COP(Colombian Peso) \t 22. DKK(Danish Krone) \t 23. MYR(Malaysian ringgit) \t 24. HK(Hong Kong Dollar) \t 25. ILS(Israeli New Shekel)");
        fromCode = currencyCodes.get(sc.nextInt());
        System.out.println("Enter the currency code to convert to:");
        System.out.println("1. USD(United States Dollar) \t 2. EUR(Euro) \t 3. GBP(Pound Sterling) \t 4. JPY(Japanese Yen) \t 5. CAD(Canadian Dollar) \t 6. AUD(Australian Dollar) \t 7. CHF(Swis Franc) \t 8. CNY(Chinese Yuan) \t 9. SGD(Singapore Dollars) \t 10. INR(Indian Rupee) \t 11. KRW(South Korean Won) \t 12. MXN(Mexican Peso) \t 13. NOK(Norwegian Krone) \t 14. PLN(Polish złoty) \t 15. RUB(Russian Ruble) \t 16. SEK(Swedish Krona) \t 17. TRY(Turkish lira) \t 18. ZAR( South African Rand) \t 19. BRL(Brazilian Real) \t 20. CLP(Chilean Peso) \t 21. COP(Colombian Peso) \t 22. DKK(Danish Krone) \t 23. MYR(Malaysian ringgit) \t 24. HK(Hong Kong Dollar) \t 25. ILS(Israeli New Shekel)");
        toCode = currencyCodes.get(sc.nextInt());
        System.out.println("Enter the Amount you wish to convert");
        amount = sc.nextDouble();
        sendHttpGETRequest(fromCode, toCode, amount);
 

    }

}