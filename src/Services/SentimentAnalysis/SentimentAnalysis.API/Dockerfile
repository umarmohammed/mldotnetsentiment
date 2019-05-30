FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["src/Services/SentimentAnalysis/SentimentAnalysis.API/SentimentAnalysis.API.csproj", "src/Services/SentimentAnalysis/SentimentAnalysis.API/"]
RUN dotnet restore "src/Services/SentimentAnalysis/SentimentAnalysis.API/SentimentAnalysis.API.csproj"
COPY . .
WORKDIR "/src/src/Services/SentimentAnalysis/SentimentAnalysis.API"
RUN dotnet build "SentimentAnalysis.API.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SentimentAnalysis.API.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SentimentAnalysis.API.dll"]