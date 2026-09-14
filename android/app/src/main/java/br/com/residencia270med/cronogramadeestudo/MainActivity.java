package br.com.residencia270med.cronogramadeestud2;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;

public class MainActivity extends Activity {
    private WebView webView;

    @Override protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        showMessage("Cronograma de Estudos APP\n\nCarregando...");
        getWindow().getDecorView().post(new Runnable() {
            @Override public void run() { startWebView(); }
        });
    }

    private void startWebView() {
        try {
            webView = new WebView(this);
            webView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
            webView.setLongClickable(false);
            webView.setHapticFeedbackEnabled(false);
            WebSettings s = webView.getSettings();
            s.setJavaScriptEnabled(true);
            s.setDomStorageEnabled(true);
            s.setAllowFileAccess(true);
            s.setAllowContentAccess(true);
            s.setBuiltInZoomControls(false);
            s.setDisplayZoomControls(false);
            webView.setWebViewClient(new WebViewClient() {
                @Override public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                    showMessage("Cronograma de Estudos APP\n\nO componente de visualização foi reiniciado.\n\nAbra o aplicativo novamente.");
                    return true;
                }
            });
            setContentView(webView);
            webView.loadUrl("file:///android_asset/cronograma.html");
        } catch (Throwable t) {
            showMessage("Cronograma de Estudos APP\n\nNão foi possível iniciar a interface.\n\n" + t.getClass().getSimpleName());
        }
    }

    private void showMessage(String text) {
        TextView error = new TextView(this);
        error.setText(text);
        error.setTextSize(18);
        error.setTextColor(Color.DKGRAY);
        error.setGravity(Gravity.CENTER);
        error.setPadding(48, 48, 48, 48);
        setContentView(error);
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }
}
