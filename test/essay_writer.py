import openai

# TODO: Replace with your actual OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

def write_essay(topic, length="5 paragraphs"):
    prompt = f"Write a {length} essay about {topic}."
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=800
    )
    return response.choices[0].message["content"]

if __name__ == "__main__":
    topic = input("Enter your essay topic: ")
    essay = write_essay(topic)
    print("\nGenerated Essay:\n")
    print(essay)