package br.com.residencia270med.cronogramadeestudo;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.view.Gravity;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;

public class MainActivity extends Activity {
    private WebView webView;

    @Override protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);

        try {
            webView = new WebView(this);
            setContentView(webView);
            WebSettings s = webView.getSettings();
            s.setJavaScriptEnabled(true);
            s.setDomStorageEnabled(true);
            s.setAllowFileAccess(true);
            s.setAllowContentAccess(true);
            s.setBuiltInZoomControls(false);
            s.setDisplayZoomControls(false);
            webView.setLongClickable(false);
            webView.setHapticFeedbackEnabled(false);
            webView.setWebViewClient(new WebViewClient());
            webView.loadUrl("file:///android_asset/cronograma.html");
        } catch (Throwable t) {
            TextView error = new TextView(this);
            error.setText("Cronograma de Estudos APP\n\nNão foi possível iniciar a interface.\n\n" + t.getClass().getSimpleName());
            error.setTextSize(18);
            error.setTextColor(Color.DKGRAY);
            error.setGravity(Gravity.CENTER);
            error.setPadding(48, 48, 48, 48);
            setContentView(error);
        }
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }
}
