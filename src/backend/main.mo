import Array "mo:core/Array";
import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type QuoteRequest = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    products : [Text];
    message : Text;
    timestamp : Int;
  };

  let quoteRequestsList = List.empty<QuoteRequest>();

  public shared ({ caller }) func submitQuoteRequest(
    name : Text,
    email : Text,
    phone : Text,
    company : Text,
    products : [Text],
    message : Text,
  ) : async () {
    let newRequest : QuoteRequest = {
      name;
      email;
      phone;
      company;
      products;
      message;
      timestamp = Time.now();
    };
    quoteRequestsList.add(newRequest);
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequestsList.toArray();
  };
};
