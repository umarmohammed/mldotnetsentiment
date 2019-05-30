using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ML;
using SentimentAnalysis.API.Models;
using System;

namespace SentimentAnalysis.API.Controllers
{
    public class SentimentAnalysisController : ControllerBase
    {
        private readonly PredictionEnginePool<SampleObservation, SamplePrediction> _predictionEnginePool;

        public SentimentAnalysisController(PredictionEnginePool<SampleObservation, SamplePrediction> predictionEnginePool)
        {
            _predictionEnginePool = predictionEnginePool;
        }

        [HttpGet("api/sentimentanalysis/predict/{sentimentText}")]
        public float Predict(string sentimentText)
        {
            var sampleData = new SampleObservation() { Col0 = sentimentText };
            var prediction = _predictionEnginePool.Predict(sampleData);
            return CalculatePercentage(prediction.Score);
        }

        public float CalculatePercentage(double value)
        {
            return 100 * (1.0f / (1.0f + (float)Math.Exp(-value)));
        }

    }
}
