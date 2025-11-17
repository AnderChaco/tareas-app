import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

// Error boundary component for handling React errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.message}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

// Error display component for API errors
export const ErrorDisplay = ({ error, onRetry }) => {
  if (!error) return null;

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      Alert.alert('Error', error, [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>Connection Error</Text>
      <Text style={styles.errorMessage}>{error}</Text>
      {onRetry && (
        <Text style={styles.retryText} onPress={handleRetry}>
          Tap to retry
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#FFE6E6',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 5,
  },
  errorMessage: {
    fontSize: 14,
    color: '#D32F2F',
    marginBottom: 5,
  },
  retryText: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ErrorBoundary;